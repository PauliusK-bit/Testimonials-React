import danielImage from "./images/image-daniel.jpg";
import jonathanImage from "./images/image-jonathan (2).jpg";
import jeanetteImage from "./images/image-jeanette (2).jpg";
import patrickImage from "./images/image-patrick (2).jpg";

function MainTestimonials() {
  return (
    <div className="main-testimonials">
      <div className="testimonial-item">
        <div className="testimonial-author-wrapper">
          <div className="testimonial-image-wrapper">
            <img src={danielImage} alt="Daniel" />
          </div>
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">Daniel Clifford</span>
            <span className="testimonial-author-verified">
              Verified Graduate
            </span>
          </div>
        </div>

        <h2 className="testimonial-title">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h2>
        <p className="testimonial-description">
          I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup.
        </p>
      </div>

      <div className="testimonial-item">
        <div className="testimonial-author-wrapper">
          <div className="testimonial-image-wrapper">
            <img src={jonathanImage} alt="Jonathan" />
          </div>
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">Jonathan Walters</span>
            <span className="testimonial-author-verified">
              Verified Graduate
            </span>
          </div>
        </div>

        <h2 className="testimonial-title">
          The team was very supportive and kept me motivated
        </h2>
        <p className="testimonial-description">
          I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself.
        </p>
      </div>

      <div className="testimonial-item">
        <div className="testimonial-author-wrapper">
          <div className="testimonial-image-wrapper">
            <img src={jeanetteImage} alt="" />
          </div>
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">Jeanette Harmon</span>
            <span className="testimonial-author-verified">
              Verified Graduate
            </span>
          </div>
        </div>

        <h2 className="testimonial-title">
          An overall wonderful and rewarding experience
        </h2>
        <p className="testimonial-description">
          Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love.
        </p>
      </div>

      <div className="testimonial-item">
        <div className="testimonial-author-wrapper">
          <div className="testimonial-image-wrapper">
            <img src={patrickImage} alt="" />
          </div>
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">Patrick Abrams</span>
            <span className="testimonial-author-verified">
              Verified Graduate
            </span>
          </div>
        </div>

        <h2 className="testimonial-title">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h2>
        <p className="testimonial-description">
          The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people.
        </p>
      </div>
    </div>
  );
}

export default MainTestimonials;
