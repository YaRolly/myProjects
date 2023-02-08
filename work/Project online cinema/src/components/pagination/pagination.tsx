import { PAGINATE } from "../../const";
export function Pagination({ totalPage, currentPage, paginate } : { totalPage: number, currentPage: number, paginate: (a: string) => void }) {
    return(
        <div className="pagination">
            <div className="pagination__btn">
                <button className="btn" disabled={currentPage <= 1} value={PAGINATE.LEFT} onClick={(event) => paginate(event.target.value)}>{PAGINATE.LEFT}</button>
                <button className="btn" disabled={currentPage >= totalPage} value={PAGINATE.RIGHT} onClick={(event) => paginate(event.target.value)}>{PAGINATE.RIGHT}</button>
            </div>
            <p>{currentPage} of {totalPage}</p>
        </div>
    )
}