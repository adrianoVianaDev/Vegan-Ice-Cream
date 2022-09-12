import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Conheça o nosso cardápio:</h2>
      <p>
        Você escolhe se quer receber em casa,
        ou nos visitar de segunda a sábado.
      </p>
    </section>
  );
};

export default MealsSummary;
