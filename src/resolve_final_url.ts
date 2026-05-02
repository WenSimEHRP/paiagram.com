export async function getFinalImageUrl(url: string): Promise<string> {
    if (!url.includes("github.com/user-attachments")) return url;
    try {
        const response = await fetch(url, {
            method: "HEAD",
            redirect: "follow",
        });
        return response.url;
    } catch (e) {
        console.error("Failed to resolve redirect for", url);
        return url;
    }
}

export async function batchGetFinalImageUrl(urls: string[]): Promise<string[]> {
    const imagePromises = urls.map(async (url) => {
        return await getFinalImageUrl(url);
    });
    return await Promise.all(imagePromises);
}
