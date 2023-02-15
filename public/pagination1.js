const ulTag = document.querySelector(".pagination ul");

function pagination(totalPages, page) {
    let liTag = "";
    let beforePage = page - 1; //4
    let afterPage = page + 1; //5
    let activeLi = "";
    let totalP = totalPages;
    // if page is greater than 1  then show the prev button
    // display prev button
    if (page > 1) {
        liTag += `<li class="pag-item btn prev"onClick="pagination(${totalP}, ${page - 1})">
                <span class="icon-move">«
                </span>
              </li>`;
    }

    //add page one if there is more than 2 pages
    if (page > 2) {
        liTag += `        <li class="pag-item num " onClick="pagination(${totalPages}, ${1})"><span>1</span></li>
    `;
        //add dots   if there is more than 3 pages

        if (page > 3) {
            liTag += `        <li class="pag-item dots"><span>...</span></li>
      `;
        }
    }
    if (page == totalPages) {
        // لو انا ف اخر صفحة عايز اعضر قبلي تلت صفحات ولو في الي قبل الخيره اعشضر اتنين قبلي بس
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    if (page == 1) {
        // لو انا ف اخر صفحة عايز اعضر قبلي تلت صفحات ولو في الي قبل الخيره اعشضر اتنين قبلي بس
        afterPage = afterPage + 2;
    } else if (page == totalPages - 1) {
        afterPage = afterPage + 1;
    }
    // display prev page and current page and after page
    for (let pageNum = beforePage; pageNum <= afterPage; pageNum++) {
        if (pageNum > totalPages) {
            continue;
        }
        if (pageNum == 0) {
            // pageNum = pageNum + 1;
            continue;
        }
        page == pageNum ? (activeLi = "active") : (activeLi = "");

        liTag += `<li class="pag-item num ${activeLi}" onClick="pagination(${totalPages}, ${pageNum})"><span>${pageNum}</span></li>`;
        //4 5 6
    }

    // display next button
    //add page one if there is more than 2 pages
    if (page < totalPages - 1) {
        //add dots   if there is more than 3 pages
        if (page < totalPages - 2) {
            liTag += `<li class="pag-item dots"><span>...</span></li>`;
        }
        liTag += `<li class="pag-item num " onClick="pagination(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
        liTag += `<li class="pag-item btn next"onClick="pagination(${totalP}, ${page + 1})">
  <span class="icon-move">»</span>
</li>`;
    }

    ulTag.innerHTML = liTag;
}
pagination(100, 50);

 