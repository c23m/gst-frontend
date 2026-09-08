import { http, HttpResponse } from 'msw'
import { mockArticles } from './data/articles'

export const handlers = [
    http.get('/api/', () => {
        return HttpResponse.json({
            time: new Date().toISOString().replace('T', ' ').slice(0, 19),
            version: "MOCK: 0.1.0"
        })
    }),
    http.get('/api/article/:identifier', ({ params }) => {
        const article = mockArticles.find(
            a => a.uuid === params.identifier || a.slug === params.identifier
        )
        if (!article) {
            return HttpResponse.json({ code: 404, message: '文章不存在' }, { status: 404 })
        }
        return HttpResponse.json(article)
    }),
    http.all('/api/*', ({ request }) => {
        return HttpResponse.json(
            { error: `接口未模拟: ${request.url}` },
            { status: 404 }
        )
    })
]