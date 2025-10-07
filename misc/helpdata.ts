type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

interface itemContent {
    color: string,
    variant: TypographyVariant,
    text: string,
    image?: string
}

interface itemCard {
    title: string,
    contents: itemContent[]
}

interface sectionContent {
    sectionId: string,
    sectionTitle: string,
    cards: itemCard[]
}

interface helpPage {
    route: string,
    pageId: string;
    pageName: string;
    sections: sectionContent[]
}

export const helpContent: helpPage[] = [
    {
        route: 'getting-started',
        pageId: "getting-started",
        pageName: "Getting Started",
        sections: [
            {
                sectionId: "what-is-workingdb",
                sectionTitle: "What is WorkingDB?",
                cards: [{
                    title: "Purpose & History",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "WorkingDB is a Microsoft Access Database, created in 2021 in Design by Jacob Brown. The original purpose was to simplify " +
                                "navigation across the various file systems across NAM and NCM. We started pulling data from different databases as read-only " +
                                "to bring more information in and simplify tracking our work. Eventually, we got permission to write data to various databases. " +
                                "This is where it started to take off."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "With much refinement, WorkingDB turned into the primary data source and front end for Design WO tracking, " +
                                "and finally our PLM for Pre-Production and ChangePoint."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Now, the WorkingDB is a widely used tool across NAM and NCM for many purposes. You probably use it to view data or track your work. " +
                                "Or at the very least, look up information."
                        }
                    ]
                }]
            },
            {
                sectionId: "getting-access",
                sectionTitle: "Getting Access",
                cards: [{
                    title: "Typical Method",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Never used WorkingDB before? Ask your supervisor or manager to send you the link." +
                                "There is a standard / automated email that can be sent that has the link and first time instructions included."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: 'Oh right, I can just give you the link here. My bad.'
                        },
                        {
                            color: 'info',
                            variant: 'body1',
                            text: '\\nas01\allshare\wdbLink'
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: 'You&apos;ll need to copy and paste that link into file explorer.'
                        }
                    ]
                }]
            },
            {
                sectionId: "first-open",
                sectionTitle: "First Time Opening WorkingDB",
                cards: [{
                    title: "Typical Method",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "The first time you open WorkingDB, you may get a few popups."
                        },
                        {
                            color: 'text.secondary',
                            variant: 'body2',
                            text: "First one - the \'Enable Content\' popup"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Just click \'Enable Content\' - it\'s that easy."
                        },
                        {
                            color: 'text.secondary',
                            variant: 'body2',
                            text: "Next One - it may ask if you want to \'Trust\' this file."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Click \'Yes\'. Trust me."
                        }
                    ]
                }]
            },
            {
                sectionId: "basic-layout",
                sectionTitle: "Basic Layout",
                cards: [{
                    title: "It\s Basic.",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Here\'s the general layout of the front page.",
                            image: '/images/getting-started/layout.png'
                        }
                    ]
                }]
            }
        ]
    },
    {
        route: 'searching',
        pageId: 'searching',
        pageName: 'Searching',
        sections: [
            {
                sectionId: "searching",
                sectionTitle: "Search",
                cards: [{
                    title: "Search",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "There are many types of searching in WorkingDB. You can search by Part Number, Quote Number, File Name, Location, etc."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "WorkingDB is connected to live Oracle data, and there are search tools that have some slightly different features than the Oracle Java app." +
                                'Some of the pages let you filter easier, some work faster, they search all Orgs at once, and you don\'t have to sign into Oracle'
                        },
                        {
                            color: 'text.secondary',
                            variant: 'subtitle1',
                            text: "NOTE: Oracle functionality does NOT work outside of the virtual desktops."
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'searching/general-search-layout',
        pageId: "general-search-layout",
        pageName: "Part Search Overview",
        sections: [
            {
                sectionId: "general-search-layout",
                sectionTitle: "General Search Layout",
                cards: [{
                    title: "Primary Part Number Searching",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Here\'s what you see when you first open WorkingDB:",
                            image: '/images/general-search-layout/search_layout_empty.png'
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "An empty, yellow, search bar with a bunch of buttons. Here\'s a quick description of some of the buttons:",
                            image: "/images/general-search-layout/search_layout_marked.png"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Each of these buttons links to a folder or area related to the part number that you search in the search bar. " +
                                "If you leave the search bar empty and click on a link, it will open the primary folder of that area. "
                        },
                    ]
                },
                {
                    title: "A few things happen when you click search:",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "WorkingDB searches Oracle for your part, and loads some basic part information from there. " +
                                "It then loads the picture of the part on the right if it can find one. " +
                                "Lastly, it looks through any folders it can to find which ones exist for this part number. "
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "If it finds a folder, it outlines the button in a dotted-green line. " +
                                "Oh, and it does the same on the \'Dash\' button if it finds a part project.",
                            image: "/images/general-search-layout/search_layout_filled.png"
                        }
                    ]
                },
                {
                    title: "Tabs for Common Org-Specific Docs",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Simply enough, there are some documents that are commonly accessed for each org.",
                            image: "/images/general-search-layout/search_layout_org_specific.png"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "There are three tabs. One for CNL, SLB, and LVG. If needs arise, more can be added for CUU and NCM."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "\'Master Setups\' is the same exact button for all orgs, since they all live together on SharePoint."
                        }
                    ]
                },
                {
                    title: "Quick Link Buttons",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "There\s a little column of extra quick-links on the side, too. " +
                                "These are reports that are found elsewhere, but very commonly used, so we put them here.",
                            image: "/images/general-search-layout/search_layout_quick_links.png"
                        },
                        {
                            color: 'text.secondary',
                            variant: 'body1',
                            text: "P.S. We run analytics on all search data, and this is how we found that these were the most used reports."
                        }
                    ]
                }
                ]
            },
            {
                sectionId: "search-links",
                sectionTitle: "Search Links Bar + Favorites",
                cards: [{
                    title: "Search Bar",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "The Favorites and Search Links areas are a great fast way to find various file locations.",
                            image: "/images/general-search-layout/search_layout_search_links.png"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Type in the search bar to dynamically search through all the links stored in WorkingDB.",
                            image: "/images/general-search-layout/search_layout_search_bar.png"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "The links are sorted by popularity (most clicked at the top)"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Click the \'Star\' next to a link to \'Favorite\' that link. It will automatically add it to the Favorites area."
                        }
                    ]
                },
                {
                    title: "Favorites",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "The favorites bar is great for links you repeatedly access that are not part specific."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "I use it a lot for specific projects I\'m working on or general folders I access repeatedly."
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "Click the \'Set Favorites\' button to modify your favorites links."
                        }
                    ]
                }
                ]
            },
            {
                sectionId: "misc-items",
                sectionTitle: "Other Search Area Items",
                cards: [
                    {
                        title: "Search History",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Click on this button to access your search history for your current session.",
                                image: "/images/general-search-layout/search-layout-search-history.png"
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        route: 'searching/oracle',
        pageId: "oracle",
        pageName: "Oracle Search",
        sections: [
            {
                sectionId: "reports",
                sectionTitle: "Reports",
                cards: [
                    {
                        title: "All Reports",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "To get to the reports section, click here on the front page.",
                                image: "/images/searching-oracle/reports_button.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "In the reports area, there are many buttons/options to choose from. All are detailed below.",
                                image: "/images/searching-oracle/reports_button.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Most of these are Oracle searches, but a few search other databases and other areas."
                            }
                        ]
                    }
                ]
            },
            {
                sectionId: "ecos",
                sectionTitle: "ECOs",
                cards: [
                    {
                        title: "ECOs",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "This page lets you search by ECO number for ALL ORGS at once, including NCM.",
                                image: "/images/searching-oracle/ecos.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "It shows all data we can currently access, included revised items."
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "There are a few extra search tools for ECOs, \'By Revised Item\' and \'By Person\', shown below."
                            }
                        ]
                    },
                    {
                        title: "ECOs By Revised Item",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "To get here, you can click here within the primary ECO search window:",
                                image: "/images/searching-oracle/ecos_revised_items_button.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Simply search a part number here to load all ECOs ever generated for this part, included cancelled ECOs.",
                                image: "/images/searching-oracle/ecos_revised_items.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Click the little button next to the ECO number to see the details for this ECO."
                            }
                        ]
                    },
                    {
                        title: "ECOs By Person",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "To get here, you can click here within the primary ECO search window:",
                                image: "/images/searching-oracle/ecos_by_person_button.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "NOTE: by default, this page searches by Design Engineer. Click the \'by PE Last, First\' button to filter by Project Engineer."
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Simply search a part number here to load all ECOs for this person.",
                                image: "/images/searching-oracle/ecos_by_person.png"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "Click the filter buttons on the right to show only the \'Not Approved\' ECOs or the \'Not Implemented\' ECOs (only approved ones)."
                            }
                        ]
                    }
                ]
            },
            {
                sectionId: "sifs",
                sectionTitle: "SIFs (Sales Information Form)",
                cards: [
                    {
                        title: "SIFs",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test1"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test2"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test3"
                            }
                        ]
                    }
                ]
            },
            {
                sectionId: "item-categories",
                sectionTitle: "Item Categories",
                cards: [
                    {
                        title: "Item Categories",
                        contents: [
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test1"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test2"
                            },
                            {
                                color: 'text.primary',
                                variant: 'body1',
                                text: "test3"
                            }
                        ]
                    }
                ]
            },
            {
                sectionId: "customer-item-xref",
                sectionTitle: "Customer Item Cross Reference",
                cards: [{
                    title: "Customer Item Cross Reference",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "on-hand-quantity",
                sectionTitle: "On Hand Quantity",
                cards: [{
                    title: "On Hand Quantity",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "bom",
                sectionTitle: "BOM / Item Where Used",
                cards: [{
                    title: "BOM / Item Where Used",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "forecast",
                sectionTitle: "Forecast Orders",
                cards: [{
                    title: "Forecast Orders",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "open-orders",
                sectionTitle: "Open Orders",
                cards: [{
                    title: "Open Orders",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "cost",
                sectionTitle: "Cost",
                cards: [{
                    title: "Cost Search",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "pos",
                sectionTitle: "POs",
                cards: [{
                    title: "Puchase Order Search",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "material-search",
                sectionTitle: "Material Search",
                cards: [{
                    title: "Material Search",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "search-by-description",
                sectionTitle: "Search By Description",
                cards: [{
                    title: "Search By Description",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "routing",
                sectionTitle: "Tool -> Part Number Routing",
                cards: [{
                    title: "Tool -> Part Number Routing",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "sif-item-report",
                sectionTitle: "Part SIF Item Report",
                cards: [{
                    title: "Part SIF Item Report",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'searching/other-search',
        pageId: 'other-search',
        pageName: 'Other Reports',
        sections: [
            {
                sectionId: "cnl-lab-wos",
                sectionTitle: "CNL Lab WOs",
                cards: [{
                    title: "CNL Lab WOs",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "slb-tooling-notes",
                sectionTitle: "SLB Tooling DB Notes",
                cards: [{
                    title: "SLB Tooling DB Notes",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "open-itrs",
                sectionTitle: "Open ITRs",
                cards: [{
                    title: "Open ITRs",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'other-front-page',
        pageId: 'other-front-page',
        pageName: 'Other Front Page',
        sections: [
            {
                sectionId: "account-information",
                sectionTitle: "Account Information",
                cards: [{
                    title: "Account Information",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "part-pictures",
                sectionTitle: "Part Pictures",
                cards: [{
                    title: "Part Pictures",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test3"
                        }
                    ]
                }]
            },
            {
                sectionId: "pack-list",
                sectionTitle: "Pack List",
                cards: [{
                    title: "Pack List",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "3dex-sheet",
                sectionTitle: "3Dex Sheet",
                cards: [{
                    title: "3Dex Sheet",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "catia-macros",
                sectionTitle: "Catia Macros",
                cards: [{
                    title: "Catia Macros",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "settings",
                sectionTitle: "Settings",
                cards: [{
                    title: "Settings",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "feedback-more-info",
                sectionTitle: "Feedback / More Info",
                cards: [{
                    title: "Feedback / More Info",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "task-tracker",
                sectionTitle: "Task Tracker",
                cards: [{
                    title: "Task Tracker",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "calendar",
                sectionTitle: "Calendar",
                cards: [{
                    title: "Calendar",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'applications',
        pageId: "applications",
        pageName: "Applications",
        sections: [
            {
                sectionId: "part-projects-tracker",
                sectionTitle: "Part Projects Tracker",
                cards: [{
                    title: "Purpose & History",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
            {
                sectionId: "part-projects-sub-apps",
                sectionTitle: "Part Projects Tracker",
                cards: [{
                    title: "Purpose & History",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'applications/part-projects-tracker',
        pageId: "part-projects-tracker",
        pageName: "Part Projects Trackers",
        sections: [
            {
                sectionId: "part-projects-tracker",
                sectionTitle: "Part Projects Tracker",
                cards: [{
                    title: "Purpose & History",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            },
        ]
    },
    {
        route: 'applications/part-projects-sub-apps',
        pageId: "part-projects-sub-apps",
        pageName: "Part Projects Sub-Apps",
        sections: [
            {
                sectionId: "part-projects-sub-apps",
                sectionTitle: "Part Projects Sub Apps",
                cards: [{
                    title: "Part Projects Sub Apps",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test1"
                        },
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "test2"
                        }
                    ]
                }]
            }
        ]
    }
]
