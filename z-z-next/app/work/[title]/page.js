
export default async function Page({ params }) {
    let { title } = await params
    let t = title.toUpperCase();
    return <p>Post: {t} </p>
}