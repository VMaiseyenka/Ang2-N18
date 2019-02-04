import { Component, OnInit, Optional, Inject } from '@angular/core';

import { ConfigOptionsService, LocalStorageService, ConstantsService } from 'src/app/core/services';
import { CONFIG } from 'src/app/core/core.module';
import { GENERATOR } from 'src/app/core/services/generator.factory';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Inject(CONFIG) private config: ConfigOptionsService,
    @Inject(GENERATOR) private generator: any[],
    private localStorageService: LocalStorageService,
    @Optional() private constantsService: ConstantsService
  ) { }

  ngOnInit() {
  }

}
