import React from 'react';
import NavBar from '../components/NavBar';
import { Container } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

const AboutPage = (props) => {
    return (
        <>
            <NavBar/>
            <div style={{'display':'flex', 'width':'100%', "height":'100%', 'textAlign':'center', 'alignItems':'center'}}>
                <Container>
                    <Jumbotron 
                    style={{'backgroundColor':'#fff'}}
                    >
                        <h1 className="display-3">Enjoy your meal!</h1><br/>
                        <p className="lead">MEALKHU는 경희대학생들의 식사고민을 덜어주기 위해 제작된 웹사이트입니다.
                        <br/>경희대 근처 생활권(정건, 마을)에 있는 식당들을 종류별로 카테고리화하였습니다.
                        <br/>친구들과 메뉴를 정할 때 랜덤추천을 사용해보세요!
                        </p>
                        <br/>
                        <hr className="my-2" />
                        <br/>
                        <p>식당추가 등 문의사항은 언제든지 환영입니다! swa07016@khu.ac.kr 연락주세요</p>
                        {/* <br/><br/><br/> */}
                    </Jumbotron>
                </Container>
            </div>
        </>
    );
}

export default AboutPage;