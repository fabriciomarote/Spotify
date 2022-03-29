package main

import controllers.PlaylistController
import controllers.SpotifyController
import controllers.UserController
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.*
import io.javalin.core.util.RouteOverviewPlugin
import org.github.unqui.getSpotifyService
import token.SpotifyRoleManager
import token.SpotifyRoles

class Api {

    fun start() {
        val spotifyService = getSpotifyService()
        val userController = UserController(spotifyService)
        val playlistController = PlaylistController(spotifyService)
        val spotifyController = SpotifyController(spotifyService)

        val app = Javalin.create {
            it.defaultContentType = "application/json"
            it.registerPlugin(RouteOverviewPlugin("/routes"))
            it.accessManager(SpotifyRoleManager(spotifyService))
            it.enableCorsForAllOrigins()
        }

        app.before {
            it.header("Access-Control-Expose-Headers", "*")
        }

        app.start(5000)

        app.routes {
            path("*") {
                post(spotifyController::addSong, SpotifyRoles.USER)

            }
            path("register") {
                post(userController::register, SpotifyRoles.ANYONE)
            }
            path("login") {
                post(userController::login, SpotifyRoles.ANYONE)
            }
            path("user") {
                get(userController::getUser, SpotifyRoles.USER)
                put(userController::editUser, SpotifyRoles.USER)
                post(userController::addPlaylist, SpotifyRoles.USER)
                path("{userId}") {
                    get(userController::getUserById, SpotifyRoles.USER)
                }
            }
            path("playlist") {
                get(spotifyController::getPlaylists, SpotifyRoles.USER)
                path("{playlistId}") {
                    get(playlistController::getPlaylistById, SpotifyRoles.USER)
                    put(playlistController::likePlaylistById, SpotifyRoles.USER)
                    patch(playlistController::editPlaylist, SpotifyRoles.USER)
                }
            }
            path("search") {
                get(spotifyController::getSearch, SpotifyRoles.USER)
            }
            path("songs") {
                get(spotifyController::getSongs, SpotifyRoles.USER)
            }
        }
    }
}

fun main() {
    Api().start()
}
