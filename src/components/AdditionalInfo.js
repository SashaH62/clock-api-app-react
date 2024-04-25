import { Container } from "./Container";
import { InfoCard } from "./InfoCard";
import { motion, AnimatePresence } from "framer-motion";

export const AdditionalInfo = ({
  timezone,
  dayOfYear,
  dayOfWeek,
  weekNumber,
  backgroundClass,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 300 }}
          transition={{ duration: 0.2 }}
          className={"motion-container"}
        >
          <Container
            containerClass={`additional-info-window container--secondary ${backgroundClass}`}
          >
            <InfoCard
              heading={"Current Timezone"}
              value={`${timezone.split("/")[0]} / ${timezone.split("/")[1]}`}
            />
            <InfoCard heading={"Day of the year"} value={dayOfYear} />

            <InfoCard heading={"Day of the week"} value={dayOfWeek} />
            <InfoCard heading={"Week number"} value={weekNumber} />
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
