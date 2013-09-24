DIST_DIR = ./dist
DIST_CSS_DIR = $(DIST_DIR)/css
DIST_IMG_DIR = $(DIST_DIR)/img
DIST_JS_DIR = $(DIST_DIR)/js
DIST_FONT_DIR = $(DIST_DIR)/font

HTML_SRC_DIR = ./html
JS_SRC_DIR = ./js
LESS_SRC_DIR = ./less
IMG_SRC_DIR = ./img
FONT_SRC_DIR = ./font
APP_SRC_DIR = ./app
HANBLEBARS_TEMPLATES_SRC_DIR=./handlebars-templates

CHECK=\033[32m✔\033[39m
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

dist: build-handlebars build-js build-css build-font build-img build-html


# Remove all build artifacts
clean:
	@rm -r $(DIST_DIR)

# 'Run' the application (starts a simple HTTP Server for Test purposes)
run:
	@cd $(DIST_DIR)
	@python -m SimpleHTTPServer

# handlebars compile (needs to be before JS Compile, as the artifacts are then inlined in the combined minified application.js)
build-handlebars:
	@echo "\n${HR}"
	@echo "Precompiling Handlebars templates..."
	@handlebars $(HANBLEBARS_TEMPLATES_SRC_DIR) -f $(JS_SRC_DIR)/templates.js
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# JS COMPILE
build-js: $(JS_SRC_DIR)/*.js
	@echo "\n${HR}"
	@echo "Building Javascript..."
	@mkdir -p $(DIST_JS_DIR)
	@cat $(JS_SRC_DIR)/jquery-1.9.1.js $(JS_SRC_DIR)/xdate.js $(JS_SRC_DIR)/handlebars.runtime-1.0.12.js $(JS_SRC_DIR)/templates.js $(JS_SRC_DIR)/blob.js $(JS_SRC_DIR)/filesaver.js $(JS_SRC_DIR)/application.js > $(DIST_JS_DIR)/app.js
	@uglifyjs -nc $(DIST_JS_DIR)/app.js > $(DIST_JS_DIR)/app.min.js
	@rm $(DIST_JS_DIR)/app.js
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# CSS COMPILE
build-css: $(LESS_SRC_DIR)/bootstrap.less
	@echo "\n${HR}"
	@echo "Building CSS..."
	@mkdir -p $(DIST_CSS_DIR)
	@recess --compress $(LESS_SRC_DIR)/bootstrap.less > $(DIST_CSS_DIR)/app.css
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# IMAGES
build-img: $(IMG_SRC_DIR)/*
	@echo "\n${HR}"
	@echo "Building Images..."
	@mkdir -p $(DIST_IMG_DIR)
	@cp $(IMG_SRC_DIR)/* $(DIST_IMG_DIR)
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# FONT
build-font: $(FONT_SRC_DIR)/*
	@echo "\n${HR}"
	@echo "Building Fonts..."
	@mkdir -p $(DIST_FONT_DIR)
	@cp $(FONT_SRC_DIR)/* $(DIST_FONT_DIR)
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

# HTML Resources
build-html: $(HTML_SRC_DIR)/*
	@echo "\n${HR}"
	@echo "Building HTML..."
	@cp -r $(HTML_SRC_DIR)/* $(DIST_DIR)
	@echo "                                            ${CHECK} Done"
	@echo "${HR}\n"

.PHONY: dist build-img build-css build-js build-font build-html