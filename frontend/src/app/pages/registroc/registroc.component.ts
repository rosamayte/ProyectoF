import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroService } from '../../services/registro.service'

@Component({
  selector: 'app-registroc',
  templateUrl: './registroc.component.html',
  styleUrls: ['./registroc.component.css']
})
export class RegistrocComponent implements OnInit {

  public registro = {
    nombre: "",
    cantidad: 1,
    costo: 0,
    preciov: 0,
    tipo: true
  };

  constructor(
    private service: RegistroService
  ) { }

  ngOnInit(): void {

  }

  registrar() {

    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.create(this.registro).subscribe((data: any) => {
          console.log(data);
          this.registro = {
            nombre: "",
            cantidad: 1,
            costo: 0,
            preciov: 0,
            tipo: true
          };
          Swal.fire("Registrado", "", "success");
        }, error => {
          console.log(error);
        });
      }
    })




  }

}
