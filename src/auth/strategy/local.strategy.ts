import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    validate(...args: any[]): unknown {
        throw new Error("Method not implemented.");//apagar a linha 9 e linha 8 antes de fazer o pull request 
    }

    private _usernameField: string;
    private _passwordField: string;

    constructor(private readonly authService: AuthService) {
        super(); 
        this._usernameField = 'usuario';
        this._passwordField = 'senha';
    }

    /* async validate(usuario: string, senha: string): Promise<any> {
        const validaUsuario = await this.authService.validateUser(usuario, senha);
        if (!validaUsuario) {
            throw new UnauthorizedException("Usuário e/ou senha incorretos!");
        }
        return validaUsuario;
    }*/

}

