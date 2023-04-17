export const Routs = {
    // pages
    Home: { path: "/" },
    Pricing: { path: "/pricing"},
    ContactUsPage: { path: "/contact"},
    Transactions: { path: "/transactions" },
    Upgrade: { path: "/upgrade" },
    Users: { path: "/users"},
    BootstrapTables: { path: "/tables/bootstrap-tables" },
    Signin: { path: "/login" },
    Signup: { path: "/signup" },
    RegisterBusiness: { path: "/register-business/:id"},
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    Lock: { path: "/lock" },
    NotFound: { path: "/404" },
    ServerError: { path: "/500" },
    EmailSent: { path: "/send-verify" },
    CompleteRegistration: { path: "/complete-registration/:token" },
    
    //SHOP OWNER
    Settings: { path: "owner/settings" },
    ShopOwnerDashboard :{ path: "/shop-owner/dashboard"},
    Staff : { path: "/shop-owner/staff"},
    InviteStaff : { path: "/shop-owner/invite-staff"},
    Services : {path: "/shop-owner/services"},
    AddService: { path: "/shop-owner/add-service"},
    EditService: { path: "/shop-owner/services/edit/:id"},
    WaitList: { path: "/shop-owner/waitlist"},
    Calendar: { path: "/shop-owner/calendar"},

    //STAFF
    StaffDashboard: { path : "/staff/dashboard"},

    //USER
    UserDashboard: { path : "/user/dashboard"},

    // docs
    // DocsOverview: { path: "/documentation/overview" },
    // DocsDownload: { path: "/documentation/download" },
    // DocsQuickStart: { path: "/documentation/quick-start" },
    // DocsLicense: { path: "/documentation/license" },
    // DocsFolderStructure: { path: "/documentation/folder-structure" },
    // DocsBuild: { path: "/documentation/build-tools" },
    // DocsChangelog: { path: "/documentation/changelog" },

    // components
    Accordions: { path: "/accordions" },
    Alerts: { path: "/components/alerts" },
    Badges: { path: "/components/badges" },
    Widgets: { path: "/widgets" },
    Breadcrumbs: { path: "/components/breadcrumbs" },
    Buttons: { path: "/components/buttons" },
    Forms: { path: "/components/forms" },
    Modals: { path: "/components/modals" },
    Navs: { path: "/components/navs" },
    Navbars: { path: "/components/navbars" },
    Pagination: { path: "/components/pagination" },
    Popovers: { path: "/components/popovers" },
    Progress: { path: "/components/progress" },
    Tables: { path: "/components/tables" },
    Tabs: { path: "/components/tabs" },
    Tooltips: { path: "/components/tooltips" },
    Toasts: { path: "/components/toasts" },
    WidgetsComponent: { path: "/components/widgets" }
};