/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface Links {
  'id'?: number;
  'project_id': number;
  'title': string;
  'url': string;
}
export interface ProjectUsers {
  'description'?: string | null;
  'id'?: number;
  'project_id'?: number | null;
  'role'?: string | null;
  'user_id'?: number | null;
}
export interface Projects {
  'category': string;
  'detail': string;
  'end_at'?: Date | null;
  'generation'?: number | null;
  'id'?: number;
  'images'?: string[] | null;
  'is_available'?: boolean | null;
  'is_founding'?: boolean | null;
  'name': string;
  'service_type': string[];
  'start_at': Date;
  'summary': string;
  'thumbnail_image': string;
}
export interface Users {
  'auth_user_id': number;
  'id'?: number;
}
