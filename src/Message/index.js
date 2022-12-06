const Message=()=>{
    return(
        <>
        <div>message</div>
        <section className="edit-information user-messages">
    <div className="">
        <div className="Toastify"></div>
    </div>
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/user/dashboard">User Account</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Messages</li>
            </ol>
        </nav>
        <div className="section-header">
            <div className="header-left">
                <h1>User Messages</h1>
            </div>
        </div>
        <div className="messages-wrap">
            <div className="messages-head">
                <form>
                    <div className="form-wrap">
                        <button id="1" type="button" className="msg-type active">All Chats</button>
                            <button id="2" type="button" className="msg-type unread ">Unread Messages</button>
                            <input className="search-input flex-grow-1" type="text"
                            placeholder="Search for a message"/>
                            <button type="submit" className="search-btn"><i
                                className="icon-magnifier"></i></button>
                    </div>
                </form>
            </div>
            <nav className="pagination-wrap" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item previous"><span className="page-link"><i className="icon-arrow"></i></span></li>
                    <li className="page-item"><span className="page-link"><i className="icon-arrow">chat</i></span></li>
                </ul>
            </nav>
        </div>
    </div>
</section>
        </>
    );
}
export default Message;