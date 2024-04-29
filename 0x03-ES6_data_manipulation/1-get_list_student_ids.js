export default function getListStudentIds(array) {
    if (!Array.isArray(array))
        return [];

    return array.map((item) => {
        return item.id;
    })
}