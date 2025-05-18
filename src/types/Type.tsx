export type TProduct = {
    id: number
    title: string
    tag: string
    count: number
    description: string

    image: {
        id: number
        image: string
    }[]

    features: string[]

    colors: {
        id: number
        title: string
        code: string
    }[]

    relatedproducts: {
        id: number
        title: string
        image: string
        firstPrice: number
        finalPrice: number
    }[]

    comments: {
        id: number
        rate: number
        parentid: number | null
        text: string
        date: string
        like: number
        dislike: number
        writer: string
        image: string
    }[]
}

export type TBlog = {
    id: number
    title: string
    tags: string[]
    image: string
    date: string
    introduction: string

    paragraph: {
        title: string
        text: string
    }[]

    comments: {
        id: number
        rate: number
        parentid: number | null
        text: string
        date: string
        like: number
        dislike: number
        writer: string
        image: string
    }[]
}

export type TBlogs = {
    id: number,
    image: string,
    title: string,
    tags: Array<string>
}

export type TBestchoice = {
    id: number,
    title: string,
    description: string,
    icon: string
}

export type TMostPopular = {
    id: number,
    title: string,
    image: string,

}

export type TCategory = {
    id: number,
    title: string,
    link: string
    image?: string
}

export type TDiscount = TMostPopular & {
    firstPrice: number,
    finalPrice: number,
}

export type TBanners = Omit<TMostPopular, "title">

export type TWhyus = {
    id: number,
    title: string,
    description: string,
    icon: string
}

export type TParams = {
    params: Promise<{ id: string }>,
    searchParams: Promise<{}>
}