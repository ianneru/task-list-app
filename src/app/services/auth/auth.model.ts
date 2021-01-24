import {Usuario} from './usuario.model';

export interface Auth {
    usuario: Usuario;
    token?: string;
}