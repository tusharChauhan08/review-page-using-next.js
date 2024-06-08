import styles from "./page.module.css";
import RatingComponent from "./components/rating";
import LikeDislikeComponent from "./components/likeDislike";
import ReviewFormInputSection from "./components/inputSection";

export default function Home() {
  return (
    <>
      <div className={styles.reviewPageContainer}>
        <form>
          <h2 className={styles.formHeading}>Leave a Review</h2>
          <ReviewFormInputSection title="Safety" label="Review safety label" Component={RatingComponent} starValue={5}/>
          <ReviewFormInputSection title="Communication" label="How's communication" Component={RatingComponent} starValue={4}/>
          <ReviewFormInputSection title="Would you recommend Transit?" label="Please give your transit" Component={LikeDislikeComponent}/>
        </form>
      </div>
    </>
  );
}
