export class User {
  id: number;
  name: string;
  email: string;
}


export class ListMessage {
  id: number;
  // tslint:disable-next-line: variable-name
  sender_id: number;
  // tslint:disable-next-line: variable-name
  room_id: number;
  sender: Sender;
  content: string;
}

export class Sender {
  id: number;
  name: string;
  email: string;
  password: string;
  // tslint:disable-next-line: variable-name
  profile_picture: string;
}

