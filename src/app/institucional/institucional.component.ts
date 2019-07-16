import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})

export class InstitucionalComponent implements OnInit {

  faInstagram = faInstagram;
  title = 'institucional';

  @ViewChild('menu', { static: true }) menu: ElementRef;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public _MessageService: MessageService) { }

  ngOnInit() {
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
    this.showHideMenu();
  }

  showHideMenu() {
    if (this.menu.nativeElement.classList.contains('show')) {
      this.menu.nativeElement.classList.toggle('show');
    }
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

      Swal.fire(
        'Enviado!',
        'E-mail enviado com sucesso!',
        'success'
      );

    });
  }
}
