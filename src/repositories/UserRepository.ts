import { UserDTO } from './../models/UserDTO';
import { Repository } from './../_core/interfaces/Repository';

export interface UserRepository extends Repository<UserDTO> {

}