import { shouldHavePageTitle } from "e2e-tests/tests/seo";
import { navigateToLinkAndCheckTitle } from "e2e-tests/tests/seo";

shouldHavePageTitle({ pageTitle: "Test Automation" });

navigateToLinkAndCheckTitle({ linkName: "Contact Us!", pageTitle: "Contact Us"});
