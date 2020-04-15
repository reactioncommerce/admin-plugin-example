import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
import useExampleHook from "../hooks/useExampleHook";

const useStyles = makeStyles((theme) => ({
  styleClassName: {
    marginBottom: theme.spacing(2)
  }
}));

/**
 * Example Component
 * @param {Object} props Component props
 * @returns {Node} React component
 */
function ExampleBlock() {
  const classes = useStyles();
  const { shop } = useExampleHook();
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <div className={classes.styleClassName}>
          <Typography>{shop.name}</Typography>
        </div>

        <Typography>{t("admin.save")}</Typography>
      </CardContent>
    </Card>
  );
}

export default ExampleBlock;
