export class User {
  id : number;
  name : string;
  email : string;
}


export class ListMessage {
  id: number;
  sender_id: number;
  room_id: number;
  sender : Sender;
  content: string;
}

export class Sender {
  id : number;
  name : string;
  email: string;
  password: string;
  profile_picture : string;
}