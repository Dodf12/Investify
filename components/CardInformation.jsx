import Card from "@/components/Card";
import MeetDevHeader from "@/components/MeetDevHeader";

export default function CardInformation() {
    return (
        <div className="min-h-screen pb-10" style={{ backgroundColor: '#272624', color: 'white'}}>
            <MeetDevHeader text="Meet the Developers"/>
            
            <div className="flex justify-between gap-10 items-start flex-wrap w-full max-w-6xl mx-auto">
                <Card name={"Kaiwen Du"}
                      role={"Frontend Developer"}
                      description={"Currently a Freshman student majoring in Computer Science at Santa Clara University."}
                      profileImg={"./KaiwenProfile.jpg"}/>

                <Card name={"Mihir Gajjar"}
                      role={"Frontend Developer"}
                      description={"Currently a Junior student majoring in Finance at Santa Clara University."}
                      profileImg={"./MihirProfile.jpeg"}/>

                <Card name={"Stanley Mei"}
                      role={"AI Engineer"}
                      description={"Currently a Graduate student majoring in Computer Science at Santa Clara University."}
                      profileImg={"./StanleyProfile.jpg"}/>

                <Card name={"Abhinav Pala"}
                      role={"AI Engineer"}
                      description={"Currently a Freshman student majoring in Computer Science at Santa Clara University."}
                      profileImg={"./AbhinavProfile.jpg"}/>

                <Card name={"Wesley Cordier"}
                      role={"Backend Developer"}
                      description={"Currently a Freshman student majoring in Computer Science at Santa Clara University."}
                      profileImg={"./WesleyProfile.jpeg"}/>

                <Card name={"Milo Guan"}
                      role={"Backend Developer"}
                      description={"Currently a Sophomore student majoring in Computer Science at Santa Clara University."}
                      profileImg={"./MiloProfile.jpg"}/>   
            </div>
        </div>
    )
}