(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{THTu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=c("PageDescription"),s=c("AnchorLinks"),p=c("AnchorLink"),b=c("InlineNotification"),m={_frontmatter:i},d=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(d,o({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"This section covers installing Red Hat CloudForms 5.0 for Cloud Pak\nfor Multicloud Management.")),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Initialize CloudForms server"),Object(a.b)(p,{mdxType:"AnchorLink"},"Configure LDAP Authentication in MCM Console"),Object(a.b)(p,{mdxType:"AnchorLink"},"Integrate CloudForms server with Cloud Pak for MultiCloud Management")),Object(a.b)(b,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Update:")," This document was recently updated to include Cloud Pak for\nMultiCloud Mangement v1.3.")),Object(a.b)("h2",null,"Required files"),Object(a.b)("p",null,"The files from Passport Advantage site for RedHat CloudForms 5 are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Red Hat CloudForms 5 for for IBM Cloud App Management 20.0.1 Multiplatform English eAssembly (CJ78FEN)")),Object(a.b)("p",null,"It contains the disk image for the Red Hat CloudForms 5 appliance for various\nplatforms and the integration to IBM Cloud Pak for MultiCloud\nManagement 1.3.\nOther formats such as AWS and Azure disk images are available from\nRed Hat in\n",Object(a.b)("a",o({parentName:"p"},{href:"https://access.redhat.com/products/red-hat-cloudforms/"}),"https://access.redhat.com/products/red-hat-cloudforms/"),"."),Object(a.b)("ul",null),Object(a.b)("h2",null,"Initialize CloudForms server"),Object(a.b)("p",null,"Follow the instructions for restoring Red Hat CloudForms 5 appliance from:\n",Object(a.b)("a",o({parentName:"p"},{href:"https://access.redhat.com/documentation/en-US/Red_Hat_CloudForms/5.0/"}),"https://access.redhat.com/documentation/en-US/Red_Hat_CloudForms/5.0/"),"."),Object(a.b)("p",null,"The following summary steps demonstrate configuring Red Hat CloudForms 5\nappliance on Amazon AWS."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Using the image ",Object(a.b)("inlineCode",{parentName:"p"},"cfme-ec2-5.11.4.2-1.x86_64.zip")," extract the vhd file:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"unzip cfme-ec2-5.11.4.2-1.x86_64.zip\n")),Object(a.b)("p",{parentName:"li"},"Store the VHD file into an S3 bucket, (such as ",Object(a.b)("inlineCode",{parentName:"p"},"rh-cloudforms5"),")."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"aws s3 cp cfme-ec2-5.11.4.2-1.x86_64.vhd s3://rh-cloudforms5\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create the ",Object(a.b)("inlineCode",{parentName:"p"},"vmimport")," role for loading an disk snapshot to AWS.  Create ",Object(a.b)("inlineCode",{parentName:"p"},"trust-policy.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"role-policy.json")," as outlined below."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"trust-policy.json")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n        "Effect": "Allow",\n        "Principal": { "Service": "vmie.amazonaws.com" },\n        "Action": "sts:AssumeRole",\n        "Condition": {\n            "StringEquals":{\n              "sts:Externalid": "vmimport"\n            }\n        }\n      }\n  ]\n}\n')),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"role-policy.json")," (change the S3 bucket name to the name you used before)."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n"Version": "2012-10-17",\n"Statement": [\n  {\n    "Effect": "Allow",\n    "Action": [\n      "s3:ListAllMyBuckets"\n    ],\n    "Resource": "*"\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "s3:CreateBucket",\n      "s3:DeleteBucket",\n      "s3:DeleteObject",\n      "s3:GetBucketLocation",\n      "s3:GetObject",\n      "s3:ListBucket",\n      "s3:PutObject"\n    ],\n    "Resource": ["arn:aws:s3:::BUCKET_TO_UPLOAD_IMAGE","arn:aws:s3:::BUCKET_TO_UPLOAD_IMAGE/*"]\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "iam:CreateRole",\n      "iam:PutRolePolicy"\n    ],\n    "Resource": "*"\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "ec2:CancelConversionTask",\n      "ec2:CancelExportTask",\n      "ec2:CreateImage",\n      "ec2:CreateInstanceExportTask",\n      "ec2:CreateTags",\n      "ec2:DeleteTags",\n      "ec2:DescribeConversionTasks",\n      "ec2:DescribeExportTasks",\n      "ec2:DescribeExportImageTasks",\n      "ec2:DescribeInstanceAttribute",\n      "ec2:DescribeInstanceStatus",\n      "ec2:DescribeInstances",\n      "ec2:DescribeTags",\n      "ec2:ExportImage",\n      "ec2:ImportInstance",\n      "ec2:ImportVolume",\n      "ec2:StartInstances",\n      "ec2:StopInstances",\n      "ec2:TerminateInstances",\n      "ec2:ImportImage",\n      "ec2:ImportSnapshot",\n      "ec2:DescribeImportImageTasks",\n      "ec2:DescribeImportSnapshotTasks",\n      "ec2:CancelImportTask"\n    ],\n    "Resource": "*"\n  }\n]\n}\n')),Object(a.b)("p",{parentName:"li"},"Create the vmimport role:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"aws iam create-role --role-name vmimport --assume-role-policy-document file://trust-policy.json\naws iam put-role-policy --role-name vmimport --policy-name vmimport --policy-document file://role-policy.json\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Load the snapshot using the file ",Object(a.b)("inlineCode",{parentName:"p"},"container.json"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "Description": "RedHat CloudForms 5",\n  "Format": "vhd",\n  "UserBucket": {\n      "S3Bucket": "BUCKET WITH UPLOADED .VHD IMAGE",\n      "S3Key": "cfme-ec2-5.11.4.2-1.x86_64.vhd"\n  }\n}\n')),Object(a.b)("p",{parentName:"li"},"Run the load:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"aws ec2 import-snapshot --disk-container file://containers.json\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check that the load has completed. "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"aws ec2 describe-import-snapshot-tasks --import-task-ids < task id >\n")),Object(a.b)("p",{parentName:"li"},"Use the Web UI to create a new AMI from the Snapshot that you uploaded,\nor run the following command."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"aws ec2 register-image\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a Security group that will allow access to port 22 (ssh) and\nport 443 (https). Use the security group for launching an instance of\nRed Hat CloudForms 5. Make sure you allocate an additional disk for the\nPostgreSQL database.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use a terminal window to SSH into the CloudForms instance.\nInitialize the server. The process below uses an embedded PostgreSQL\ndatabase for a standalone CloudForms server."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Login to the appliance"),Object(a.b)("li",{parentName:"ul"},"Run the ",Object(a.b)("inlineCode",{parentName:"li"},"appliance_console")," command"),Object(a.b)("li",{parentName:"ul"},"Select the options ",Object(a.b)("strong",{parentName:"li"},"[5]"," Configure Database")," > ",Object(a.b)("strong",{parentName:"li"},"[1]"," Create key")," >\n",Object(a.b)("strong",{parentName:"li"},"[1]"," Create Internal Database")," > ",Object(a.b)("strong",{parentName:"li"},"[1]"," /dev/xvdb")),Object(a.b)("li",{parentName:"ul"},"Answer ",Object(a.b)("strong",{parentName:"li"},"N")," for ",Object(a.b)("inlineCode",{parentName:"li"},"Should this appliance run as a standalone database server?")),Object(a.b)("li",{parentName:"ul"},"Assign a postgreSQL password and verify"),Object(a.b)("li",{parentName:"ul"},"Answer ",Object(a.b)("strong",{parentName:"li"},"0")," for the database region number"),Object(a.b)("li",{parentName:"ul"},"Wait until the database is initialized"),Object(a.b)("li",{parentName:"ul"},"Back in the main menu, select ",Object(a.b)("strong",{parentName:"li"},"[14]"," Start CFME server"),"\nand then ",Object(a.b)("strong",{parentName:"li"},"[19]"," Exit")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Try logging into the CloudForms server using port 443.\nLogin as ",Object(a.b)("inlineCode",{parentName:"p"},"admin")," and password of ",Object(a.b)("inlineCode",{parentName:"p"},"smartvm"),"."))),Object(a.b)("h2",null,"Configure LDAP Authentication in MCM Console"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.3.0/iam/3.4.0/configure_ldap.html"}),"Configure LDAP")),Object(a.b)("ul",null),Object(a.b)("h2",null,"Integrate CloudForms server with Cloud Pak for MultiCloud Management"),Object(a.b)("p",null,"For this configuration we will use the following variables.  Replace them with yours."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLOUDFORMS_CLIENT_ID"),": a string with your cloudforms client id.  Can be anything randomly generated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLOUDFORMS_CLIENT_SECRET"),": a string with your cloudforms client secret.  Can be anything randomly generated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ICP_CONSOLE"),": FQDN for the MCM icp-console."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLOUDFORMS_HOST"),": IP Address or FQDN of your CloudForms server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLOUDFORMS_PASSPHRASE"),": a string with a cloudforms passphrase.  Can be anything randomly generated.")),Object(a.b)("ul",null),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a file ",Object(a.b)("inlineCode",{parentName:"p"},"registration.json"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'  {\n    "token_endpoint_auth_method":"client_secret_basic",\n    "client_id": "$CLOUDFORMS_CLIENT_ID",\n    "client_secret": "$CLOUDFORMS_CLIENT_SECRET",\n    "scope":"openid profile email",\n    "grant_types":[\n      "authorization_code",\n      "client_credentials",\n      "password",\n      "implicit",\n      "refresh_token",\n      "urn:ietf:params:oauth:grant-type:jwt-bearer"\n    ],\n    "response_types":[\n      "code",\n      "token",\n      "id_token token"\n    ],\n    "application_type":"web",\n    "subject_type":"public",\n    "post_logout_redirect_uris":[\n      "https://$ICP_CONSOLE/"\n    ],\n    "preauthorized_scope":"openid profile email general",\n    "introspect_tokens":true,\n    "trusted_uri_prefixes":[\n      "https://$ICP_CONSOLE",\n      "https://$CLOUDFORMS_HOST"\n    ],\n    "redirect_uris":[\n      "https://$ICP_CONSOLE/auth/liberty/callback",\n      "https://$CLOUDFORMS_HOST/oidc_login/redirect_uri"\n    ]\n  }\n')),Object(a.b)("p",{parentName:"li"},"  Then run this command."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cloudctl iam oauth-client-register -f registration.json\n")),Object(a.b)("p",{parentName:"li"},"  Collect the client secret that is generated.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Extract the MCM certificate and save it as a TRUSTED certificate."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubectl get secret -n kube-public ibmcloud-cluster-ca-cert -o jsonpath='{.data.ca\\.crt}' | base64 --decode | sed 's/CERTIFICATE/TRUSTED CERTIFICATE/' > ibm-mcm-ca.crt\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy the ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-mcm-ca.crt")," file to the CloudForms machine in the path\nof ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/pki/ca-trust/source/anchors"),". Run the following command. "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"update-ca-trust\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Restart the CloudForms engine. "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"systemctl restart evmserverd\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the following commands to copy oidc configurations:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'TEMPLATE_DIR="/opt/rh/cfme-appliance/TEMPLATE"\ncp ${TEMPLATE_DIR}/etc/httpd/conf.d/manageiq-remote-user-openidc.conf /etc/httpd/conf.d/\ncp ${TEMPLATE_DIR}/etc/httpd/conf.d/manageiq-external-auth-openidc.conf.erb /etc/httpd/conf.d/manageiq-external-auth-openidc.conf\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update the ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/manageiq-external-auth-openidc.conf")," file as follows."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),'LoadModule          auth_openidc_module modules/mod_auth_openidc.so\nServerName          https://$CLOUDFORMS_HOST\n\nOIDCCLientID                   $CLOUDFORMS_CLIENT_ID\nOIDCClientSecret               $CLOUDFORMS_CLIENT_SECRET\nOIDCRedirectURI                https://$CLOUDFORMS_HOST/oidc_login/redirect_uri\nOIDCCryptoPassphrase           $CLOUDFORMS_PASSPHRASE\nOIDCOAuthRemoteUserClaim       sub\nOIDCRemoteUserClaim            name\n\nOIDCProviderIssuer                  https://127.0.0.1:443/idauth/oidc/endpoint/OP\nOIDCProviderAuthorizationEndpoint   https://$ICP_CONSOLE/idprovider/v1/auth/authorize\nOIDCProviderTokenEndpoint           https://$ICP_CONSOLE/idprovider/v1/auth/token\nOIDCOAuthIntrospectionEndpoint      https://$ICP_CONSOLE/idprovider/v1/auth/introspect\nOIDCProviderJwksUri                 https://$ICP_CONSOLE/oidc/endpoint/OP/jwk\nOIDCProviderEndSessionEndpoint      https://$ICP_CONSOLE/idprovider/v1/auth/logout\n\nOIDCScope                        "openid email profile"\nOIDCResponseMode                 "query"\nOIDCProviderTokenEndpointAuth     client_secret_post\n\nOIDCPassUserInfoAs json\nOIDCSSLValidateServer off\nOIDCHTTPTimeoutShort 10\n\n<Location /oidc_login>\n  AuthType  openid-connect\n  Require   valid-user\n  LogLevel   warn\n</Location>\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Restart httpd. "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"systemctl restart httpd\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the CloudForms Web UI and log in as ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),", then select the\nConfiguration by clicking the gear icon.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Select ",Object(a.b)("strong",{parentName:"p"},"Settings"),", then select the ",Object(a.b)("strong",{parentName:"p"},"Authentication")," tab.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the Authentication section, set the Mode to ",Object(a.b)("strong",{parentName:"p"},"External (httpd)"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the External Authentication (httpd) Settings section, set the\nProvider Type to ",Object(a.b)("strong",{parentName:"p"},"Enable OpenID-Connect"),"."),Object(a.b)(b,{mdxType:"InlineNotification"},"This setting enables the OIDC login button on the login screen, that redirects to the OIDC protected page for authentication, and supports the OIDC logout process."),Object(a.b)(b,{mdxType:"InlineNotification"},"As an optional step, in the External Authentication (httpd) Settings section, select Enable Single Sign-On. If you select this option, the initial access to the Appliance Administrative UI will redirect to the OIDC Identity Provider authentication screen.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the Role Settings section, select the\n",Object(a.b)("strong",{parentName:"p"},"Get User Groups from External Authentication (httpd)")," setting.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Select ",Object(a.b)("strong",{parentName:"p"},"Access Control"),". Make sure the user’s groups are created\non the Appliance and appropriate roles are assigned to those groups."),Object(a.b)(b,{mdxType:"InlineNotification"},"The name of the group must match the name of the LDAP group used for granting access to the ICP Console")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click ",Object(a.b)("strong",{parentName:"p"},"Save"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log out from CloudForms, and refresh your browser.  If you enabled SSO, it will redirect you to the ICP Console logon screen.  If not, click on ",Object(a.b)("inlineCode",{parentName:"p"},"Log in to Corporate System")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-mcm-13-cp-4-mcm-cloudforms-index-mdx-491edf154e486ff555fe.js.map