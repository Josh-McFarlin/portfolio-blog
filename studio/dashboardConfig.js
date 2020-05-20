export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec56d83dca57f01a5cb390f',
                  title: 'Sanity Studio',
                  name: 'portfolio-blog-studio',
                  apiId: '3e99a8eb-eccc-4f9e-84e4-8b086b796a0a'
                },
                {
                  buildHookId: '5ec56d841ffc650172173afd',
                  title: 'Blog Website',
                  name: 'portfolio-blog-web',
                  apiId: '0be2d139-a818-4c20-b8ac-b2ed67737975'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Josh-McFarlin/portfolio-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio-blog-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
