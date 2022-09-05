export const bodyPage = (tabList, id) => {
    const body = tabList.find(item => item.id === id);
    return body ? `${body.body}${body.content} (id: ${body.id})` : `${tabList[0].body}${tabList[0].content} (id: ${tabList[0].id})`;
}
