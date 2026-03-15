import { CodeIcon, HomeIcon, Phone } from "lucide-react";
import { Icons } from "~/components/Icons";

export const Contents = {

    // Yardım İçin -> https://discord.gg/luppux
    Name: 'Merd',
    About: 'Let me introduce myself, I am Merd. I am 18 y/o. I am a versatile developer with a deep passion for all aspects of software.',
    Version: 'v2.0.0',

    DiscordID: '1052616295822151790', // Discord ID
    GithubName: 'necklessx-commits', // Github İsmin
    Instagram: 'gottalovemerdd', // Instagram İsmin

    Spotfy: {
        ClientID: '', // Spotify ClientID || Client oluşturmak için -> https://developer.spotify.com 
        ClientSecret: '', // Spotify Client Secret || Client oluşturmak için -> https://developer.spotify.com 
        RefreshToken: '' // Client Refresh Token || Client oluşturmak için -> https://developer.spotify.com 
    },

    MetaData: {
        Name: 'Merd',
        Url: 'https://www.merdshu.live',
        Description: 'Merd Official Website',
    },

    Skills: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next JS',
        'Nuxt JS',
        'Bootstrap',
        'Tailwind',
        'Vue',
        'MongoDB',
        'MySQL',
    ],

    Navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/contact", icon: Phone, label: "Contact" },
    ],

    Contact: {
        social: {
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/gottalovemerdd/",
                icon: Icons.Instagram,

                navbar: true,
            },
            Github: {
                name: "Github",
                url: "https://github.com/necklessx-commits",
                icon: Icons.Github,
                navbar: true,
            },
            Discord: {
                name: "Discord",
                url: "https://discord.com/users/1052616295822151790",
                icon: Icons.Discord,
                navbar: true,
            },
        },
    },

} as const