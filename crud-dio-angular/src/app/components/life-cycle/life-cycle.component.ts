import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() number = 10

  constructor() {
    console.log('chamou o construtor')
   }

  ngOnChanges(): void {
    console.log('chamou o on changes')
  }

  ngOnInit(): void {
    console.log('chamou o on Init')
  }

  ngDoCheck(): void {
    console.log('chamou o do check')
  }

  ngAfterContentInit(): void {
    console.log('chamou o after content init')
  }
  
  ngAfterContentChecked(): void {
    console.log('chamou o after content checked')
  }

  ngAfterViewInit(): void {
    console.log('chamou o after view init')
  }

  ngAfterViewChecked(): void {
    console.log('chamou o after view checked')
  }

  ngOnDestroy(): void {
    console.log('chamou o on destroy')
  }
}
