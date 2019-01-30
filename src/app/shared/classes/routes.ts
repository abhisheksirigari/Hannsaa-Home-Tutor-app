import { environment as env, environment } from '../../../environments/environment';

const API_URL = env.baseUrl;

export class Routes {
  
  public static GET_CLASSES() {
    return `${API_URL}/config/class`;
  }

  public static POST_CLASS() {
    return `${API_URL}http://13.126.181.173:8080/config/class`;
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
  
}
