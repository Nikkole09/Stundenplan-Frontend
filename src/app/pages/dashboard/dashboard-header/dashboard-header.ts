import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { DashboardUser } from '../../../models/dashboard.model';
/**
 * Darstellung und Interaktion der Seite.
 * Zeigt die Navigation, den Avatar und das Profilmenü.
 * Die eigentlichen Werte kommen aus den vorhandenen Services bzw. der API.
 */
@Component({
    selector: 'app-dashboard-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './dashboard-header.html',
    styleUrl: './dashboard-header.css'
})
export class DashboardHeader {
    @Input()
    user: DashboardUser | null = null;
    profileMenuOpen = false;
    constructor(private authService: AuthService, private router: Router) { }
    toggleProfileMenu(): void {
        this.profileMenuOpen = !this.profileMenuOpen;
    }
    closeProfileMenu(): void {
        this.profileMenuOpen = false;
    }
    get initials(): string {
        if (!this.user?.name) {
            return 'ST';
        }
        return this.user.name
            .split(' ')
            .map(part => part[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
    }
    logout(): void {
        this.authService.clearToken();
        this.router.navigate(['/']);
    }
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.profile-container')) {
            this.closeProfileMenu();
        }
    }
}