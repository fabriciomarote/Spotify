package token

import SpotifyService
import io.javalin.core.security.AccessManager
import io.javalin.core.security.RouteRole
import io.javalin.http.Context
import io.javalin.http.Handler
import io.javalin.http.UnauthorizedResponse
import org.api.token.InvalidToken
import org.api.token.TokenController
import org.omg.CosNaming.NamingContextPackage.NotFound

internal enum class SpotifyRoles: RouteRole {
    ANYONE,USER
}

class SpotifyRoleManager(private val system: SpotifyService) : AccessManager {
    private val tokenController = TokenController()

    override fun manage(handler: Handler, ctx: Context, roles: MutableSet<RouteRole>) {
        val token = ctx.header("Authorization")
        when {
            roles.contains(SpotifyRoles.ANYONE) -> handler.handle(ctx)
            token == null -> throw UnauthorizedResponse()
            roles.contains(SpotifyRoles.USER) -> {
                try {
                    val id =  tokenController.validate(token)
                    system.getUser(id)
                    ctx.attribute("id", id)
                    handler.handle(ctx)
                } catch (e: NotFound) {
                    throw UnauthorizedResponse()
                } catch (e: InvalidToken) {
                    throw UnauthorizedResponse()
                }
            }
        }
    }
}