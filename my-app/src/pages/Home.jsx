
import React from 'react';
import { Link } from 'react-router-dom'




const Home = () => {
  return (
    <div className="container">
      <div className="music-link">
        
        <center><p className='p'>Bir şarkı ile başlayalım mı?</p></center>
        <p className='p2'><Link className='link' to="/video" > o zaman tıkla</Link></p>
      </div>
    <div className='home'>
     
       
      <div className="content">
      

       
        <div className="head">  <center><p className='header'><i>Amean Danışmanlıkta Neler Bulabilirim?</i></p></center></div>
        <div className="youtube-box">
          
        </div>
        
        
        <div className="post1">

        <div className="post1-img">
            <img src="https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="post1-text">
          <p>Yazılım dünyasında hızla ilerleyen teknolojilere ayak uydurmak artık bir ihtiyaç haline geldi.
        <br></br> Bu nedenle, şirketimiz işletmenizin ihtiyaçlarına uygun özel yazılım geliştirme hizmetleri sunar.
        <br></br> Müşterilerimizin ihtiyaçlarını tam olarak anlamak ve çözümlerimizi onlara göre uyarlamak için büyük çaba gösteriyoruz.</p>
          </div>

          

        </div>
         
        <div className="post2">
        <div className="post2-img">
            <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>

           <div className="post2-text">
            <p>
            eğitim danışmanlığı hizmetimizle müşterilerimize yazılım ve teknoloji konularında bilgi veriyoruz.
            <br></br> Eğitimlerimiz, her seviyedeki kullanıcılar için özelleştirilebilir ve ihtiyaçlarınıza uygun olacak şekilde tasarlanır.<br></br> Eğitimlerimiz, işletmenizdeki personelinize yazılım ve teknoloji konularında daha fazla yetkinlik kazandırarak<br></br> işletmenizin verimliliğini artırmayı amaçlar.
            </p>
           
           </div>

          

        </div>
        <div className="head">  <center><p className='header'><i>Danışmanlık genellikle bir dizi adımdan oluşur:</i></p></center></div>
        <div className="post3">
          
          <div className="post3-img">

            <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

          </div>

        

          <div className="post3-text">

             

        


<p>
İlk olarak, danışan ve danışman arasında bir tanıtım süreci gerçekleşir ve konu hakkında bilgi alışverişi yapılır.
<br></br>Danışman, konu hakkında kapsamlı bir araştırma yapar ve sorunu çözmek için çeşitli stratejiler ve öneriler geliştirir.
<br></br>Danışman, danışanla birlikte çalışarak bu stratejileri uygulamak ve sonuçları analiz etmek için bir plan oluşturur.
<br></br>Danışman, sonuçları değerlendirmek ve işlemek için raporlar ve öneriler sunar.
<br></br>Danışman, danışanın sürekli gelişimini takip eder ve gerektiğinde yeniden değerlendirme yapar.
<br></br>Danışmanlık, işletme, insan kaynakları, yönetim, pazarlama, finans, teknoloji, hukuk ve diğer birçok alanda uygulanabilir. Danışmanlık hizmetleri, genellikle danışmanlık firmaları veya bağımsız danışmanlar tarafından sunulur ve genellikle ücretli bir hizmettir.
</p>
          </div>

        </div>
       
      </div>
     
    </div>
    </div>
  )
}

export default Home