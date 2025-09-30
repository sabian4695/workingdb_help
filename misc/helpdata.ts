type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

interface itemContent {
    color: string,
    variant: TypographyVariant,
    text: string,
    image?: string
}
interface sectionContent {
    sectionId: string,
    sectionTitle: string,
    cards: {
        title: string,
        contents: itemContent[]
    }
}

interface helpPage {
    pageId: string;
    pageName: string;
    sections: sectionContent[]
}

export const helpContent: helpPage[] = [
    {
        pageId: "gettingstarted",
        pageName: "Getting Started",
        sections: [
            {
                sectionId: "what-is-workingdb",
                sectionTitle: "What is WorkingDB?",
                cards: {
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
                }
            },
            {
                sectionId: "getting-access",
                sectionTitle: "Getting Access",
                cards: {
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
                }
            },
            {
                sectionId: "first-open",
                sectionTitle: "First Time Opening WorkingDB",
                cards: {
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
                }
            },
            {
                sectionId: "basic-layout",
                sectionTitle: "Basic Layout",
                cards: {
                    title: "Typical Method",
                    contents: [
                        {
                            color: 'text.primary',
                            variant: 'body1',
                            text: "I\'ll put some nice pictures here for you, eventually.",
                            image: '/public/images/gettingstarted/layout.png'
                        }
                    ]
                }
            }
        ]
    }
]