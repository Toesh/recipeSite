import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigService } from '@rest/config/config.service';
import { ConfigComponent } from './config.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService } from 'ngx-logger';

describe('ConfigComponent', () => {
	let component: ConfigComponent;
	let fixture: ComponentFixture<ConfigComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ConfigComponent,
			],
			providers: [
				ConfigService,
				HttpClient,
				HttpHandler,
				NGXLogger,
				NGXLoggerHttpService,
				LoggerConfig,
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfigComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
