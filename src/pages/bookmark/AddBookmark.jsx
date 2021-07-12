import { useState } from "react";

function AddBookmark() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div className="row mt-3">
            <h4 className="text-gray-400">Add Bookmark</h4>
            <div className="mt-3">
                <label htmlFor="title">Bookmark Title</label>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    placeholder="i wanna do sample work"
                    className="col-10 mt-2 form-control shadow-none"
                />
            </div>

            <div className="mt-3">
                <label htmlFor="title">Bookmark Text</label>
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    rows="6"
                    type="text"
                    id="title"
                    placeholder="my complete description for better infomation of my work"
                    className="col-10 mt-2 form-control shadow-none"
                />
            </div>

            <div className="mt-3">
                <button className="p-2 px-4 bg-blue-500 text-white rounded">Add</button>
            </div>
        </div>
    );
}

export default AddBookmark;
