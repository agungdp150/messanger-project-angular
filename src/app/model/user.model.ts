export class User {
  id: number;
  name: string;
  email: string;
}


export class ListMessage {
  id: number;
  senderId: number;
  roomId: number;
  sender: Sender;
  content: string;
}

export class Sender {
  id: number;
  name: string;
  email: string;
  password: string;
  profilePicture: string;
}