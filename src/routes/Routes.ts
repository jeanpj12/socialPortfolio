import { Feed } from "../pages/feed"
import { Portfolio } from "../pages/portfolio"
import { Skills } from "../pages/skills"
import { Contact } from "../pages/contato"

export const routes = [
    {
        title: 'Feed',
        path: '/',
        component: Feed,
    },
    {
        title: 'Portfólio',
        path: '/portfolio',
        component: Portfolio,
    },
    {
        title: 'Skills',
        path: '/skills',
        component: Skills,
    },
    {
        title: 'Contato',
        path: '/contato',
        component: Contact,
    },
]