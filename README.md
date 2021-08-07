## Getting Started

First, run the development server:

```bash
npm run dev
```

## Contentful data setup

### Cornerstone page contents:

**Tite:** This is the title of the cornerstone page
**Slug:** Slug for the url of the page
**PageContent:** This is the main content of the page. This is rich text content. Add content, video, image etc.
**Social Links:** It is a JSON field. Add links like below:

```
{
    "facebook": "https://www.facebook.com/sharer/sharer.php?u=https://vertrical.com/",
    "twitter": "https://twitter.com/intent/tweet?url=https://vertrical.com/&text=",
    "linkedIn": "https://www.linkedin.com/shareArticle?mini=true&url=https://vertrical.com/",
    "whatsapp": "https://api.whatsapp.com/send?text=https://vertrical.com/",
    "mail": "mailto:info@example.com?&subject=&cc=&bcc=&body=https://vertrical.com/%0A"
}
```

##

### Blog page contents:

**Tite:** This is the title of the blog page
**Slug:** Slug for the url of the page
**Blog Content:** This is the main content of the page. This is rich text content. Add content, video, image etc.
**Excerpt:** Some expert from the blog post to use as page description. It is also used in 'You may also like' section's blog cards.
**Writer:** Name of the writer of the article
**Date:** Date of the writing of the article
**Cover Image:** Cover image to be shown on 'You may also like' section's blog card
**Writer Image:** Writer image to be shown on 'You may also like' section's blog card
**Social Links:** It is a JSON field. Add links like below:

```
{
    "facebook": "https://www.facebook.com/sharer/sharer.php?u=https://vertrical.com/",
    "twitter": "https://twitter.com/intent/tweet?url=https://vertrical.com/&text=",
    "linkedIn": "https://www.linkedin.com/shareArticle?mini=true&url=https://vertrical.com/",
    "whatsapp": "https://api.whatsapp.com/send?text=https://vertrical.com/",
    "mail": "mailto:info@example.com?&subject=&cc=&bcc=&body=https://vertrical.com/%0A"
}
```

##

### Mission contents:

This content type is used to design the mission cards on 'About us' page
**Tite:** This is the title of the mission
**Description:** This is the description of the mission
**Image:** Artwork used on mission

##

### Vision contents:

This content type is used to design the vison section on 'About us' page
**Tite:** This is the title of the vison
**Content:** This is the description of the vison

##

### Team contents:

This content type is used to design the vison section on 'About us' page
**Name:** This is the name of the team member
**Title:** Position of the team member in the company
**Short Description:** Short description to show at first when a team member is expanded.
**Description:** Full description to show when 'Read more' is clicked on short description
**Image:** Team member's image

## Utilites

### DualImage contents:

This is a custom content type to show two images on Cornerstone page. Add images here and use this as linked asset. You can see the usage example here:
https://app.contentful.com/spaces/3utxmlu2ny3b/entries/546xcvF7poMXuMzVpSjXzk

##

### Qoutation:

This is also a custom content type which will be used to add any quotation in cornerstone or blog page content. Use it as a linked asset. You can see the usage example here:
https://app.contentful.com/spaces/3utxmlu2ny3b/entries/546xcvF7poMXuMzVpSjXzk

##

### VideoEmbed:

If you want to add any video in cornerstone or blog page then use this custom content type. Add this as a linked asset. You can see the usage example here: https://app.contentful.com/spaces/3utxmlu2ny3b/entries/4Uj8s4V015cDpURL0rqVAC
