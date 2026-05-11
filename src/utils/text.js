export function compactTaskContent(content) {
    return content.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '$1'
    )
}