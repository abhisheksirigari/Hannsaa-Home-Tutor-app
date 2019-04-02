import { environment as env, environment } from '../../../environments/environment';

const API_URL = env.baseUrl;

export class Routes {

  public static OAUTHTOKEN() {
    return `${API_URL}/token/`;
  }

  public static REGISTER() {
    return `${API_URL}/register/`;
  }
    
  public static GET_CLASSES() {
    return `${API_URL}/config/class`;
  }

  public static POST_CLASS() {
    return `${API_URL}/config/class`;
  }

  public static GET_SUBJECTS() {
    return `${API_URL}/config/subject`;
  }

  public static POST_SUBJECT() {
    return `${API_URL}/config/subject`;
  }

  public static GET_NEAR_BY_TUTORS() {
    return `${API_URL}/config/class`;
  }

  public static GET_CONFIG_CATEGEORIES() {
    return `${API_URL}/config`;
  }

  public static GET_CATEGEORIES() {
    return `${API_URL}/config/category`;
  }

  public static EDIT_CATEGEORIES() {
    return `${API_URL}/config/category`;
  }

  public static ADD_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static EDIT_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static DELETE_CLASS_TO_CATEGORY(id: any) {
    return `${API_URL}/config/category/${id}/class`;
  }

  public static ADD_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  public static EDIT_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  public static DELETE_SUBJECT_TO_CATEGORY(id: any) {
    return `${API_URL}/config/class/${id}/subject`;
  }

  
  
}
