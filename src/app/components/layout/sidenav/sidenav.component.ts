import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomChatService } from 'src/app/service/room-chat.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  memberRoom = [];
  isLoading = true;

  constructor(
    private routeActive: ActivatedRoute,
    private roomService: RoomChatService
  ) {}

  ngOnInit() {
    this.routeActive.params.subscribe(params => {
      const id = params.id;
      this.roomService.getMember(id).subscribe(allMember => {
        this.memberRoom = allMember;
        this.isLoading = false;
      });
    });
  }
}
