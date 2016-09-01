import {Component} from 'angular2/core';
import {DtoService} from './dto.service';

@Component({
  selector: 'dto',
  template: `
    <h2>Dto</h2>
    {{title}}
    <ul>
      <li *ngFor="#key of dtoKeys">
        <b>{{ key }} :</b> {{ dtoValues[key] }}
      </li>
    </ul>
  `,
  providers: [DtoService]
})
export class DtoComponent {
  title = 'Titile for the DTO dispay component';
  dto = {};
  dtoKeys = ['Key'];
  dtoValues = {};

  constructor(dtoService: DtoService) {
    this.dto = dtoService.getDto();
    this.dtoValues['Key'] = 'Values';
    this.traverseGraph(this.dto);
  }

  traverseGraph(rootNode, previousRootNodeKey = '') {
    let keys = Object.keys(rootNode);
    for (var k in keys) {
      let keyValue = keys[k];
      if (typeof rootNode[keyValue] == "object" && rootNode[keyValue] !== null) {
        this.traverseGraph(rootNode[keyValue], previousRootNodeKey + ' -> ' + keyValue);
      } else {
        let composedKey = previousRootNodeKey + ' -> ' + keyValue;
        this.dtoKeys.push(composedKey);
        this.dtoValues[composedKey] = rootNode[keyValue];
      }
    }
  }
}
