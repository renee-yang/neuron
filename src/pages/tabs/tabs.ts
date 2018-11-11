import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CreatePage } from '../create/create';
import { ResourcesPage } from '../resources/resources';
import { SwipePage } from '../swipe/swipe';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SwipePage;
  tab2Root = ResourcesPage;
  tab3Root = CreatePage;
  tab4Root = ChatPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
