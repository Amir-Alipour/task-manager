import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookmarks } from "../../store/bookmarkSlice/bookmarkActions";
import { selectAllBookmarks } from "../../store/bookmarkSlice/bookmarkSlice";
import AddBookmark from "./AddBookmark";
import Bookmark from "./Bookmark";

function Bookmarks() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.bookmark.status);
    const bookmarks = useSelector(selectAllBookmarks);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchBookmarks());
        }
    }, [dispatch, status]);

    return (
        <div
            className="container p-3 overflow-y-scroll custom-scrollbar"
            style={{ height: "94vh" }}
        >
            <div className="row border-b">
                <h3>Bookmarks 📑</h3>
            </div>

            <AddBookmark />

            <div className="row mt-4">
                {bookmarks.length > 0
                    ? bookmarks.map((bookmark) => (
                          <Bookmark key={bookmark.id} bookmark={bookmark} />
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Bookmarks;
