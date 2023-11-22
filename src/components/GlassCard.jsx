import styles from './GlassCard.module.css'

export default function GlassCard() {
  return (
      <div className={`${styles.glasscard} ${styles.glasseffect}`}>
          <h2>Animal Facts</h2>
          <p><strong>Animal:</strong> Red Panda</p>
          <p><strong>Habitat:</strong> Eastern Himalayas</p>
          <p><strong>Diet:</strong> Mostly bamboo, but also eggs, birds, and insects.</p>
          <p><strong>Interesting Fact:</strong> Despite their name, red pandas are not closely related to giant pandas.</p>
      </div>
  );
}