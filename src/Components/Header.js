import './Header.css'


const Header = ({dataH, todosH}) => {
   
    return (
        <div className='header'>
            <h1 className='title'>REACT TODOLIST APP</h1>
            <div className='dashboard'>
                <div className="dashline">
                    <h2>Dashboard</h2>
                    <div className="dbicons">
                        <i className="fa fa-bell"><span>2</span></i>
                        <i className="fa fa-user"></i>
                    </div>
                </div>

                <div className="scoreboard">
                    <div className='card card1'><div className="imgbox"><i className="fa fa-clipboard-list"></i></div><div className="writeup"> <h2>{todosH.length}</h2><span>Total Tasks</span></div></div>
                    <div className='card card2'><div className="imgbox"><i className="fa fa-circle-xmark"></i></div><div className="writeup"><h2>{todosH.length-dataH[1]} <span> Tasks</span></h2><span>Uncompleted</span></div></div>
                    <div className='card card3'><div className="imgbox"><i className="fa fa-circle-check"></i></div><div className="writeup"><h2>{dataH[1]}<span> Tasks</span> </h2><span>Completed</span></div></div>
                    <div className='card card4'><div className="imgbox"><i className="fa fa-percent"></i></div><div className="writeup"><h2>{((dataH[1]/todosH.length)*100).toFixed(1)}%</h2><span>Performance</span></div></div>
                </div>
               
            </div>

        </div>
    );
}

export default Header
