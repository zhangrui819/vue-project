// 导出表格
/**
 *
 * @param filename      表格名字
 * @param data          后端返回数据 {size: 46199, type: "application/vnd.ms-excel"}
 */

function exportExcel(filename,data) {
    //let filename = '污水处理站详情表格';
    let binaryData = [];
    binaryData.push(data);
    let url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/vnd.ms-excel"}))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', filename + '.xlsx')
    document.body.appendChild(link)
    link.click()
}

export {exportExcel};
