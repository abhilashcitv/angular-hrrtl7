import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-tooltip>
        </kendo-chart-tooltip>
        <kendo-chart-series>
          <kendo-chart-series-item [data]="[1, 2, 3]">
          </kendo-chart-series-item>
          <kendo-chart-series-item [data]="[1, 2, 3]">
            <kendo-chart-series-item-tooltip background="green">
            </kendo-chart-series-item-tooltip>
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
      `
  })
  export class AppComponent {}
